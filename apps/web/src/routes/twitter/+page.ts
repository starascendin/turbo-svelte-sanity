import type { PageLoad } from './$types';
import Airtable from '$lib/utils/airtable';

const api_key = 'patIKaQst9Ng4h153.e626aec62064e11fe2ef474d298a1ed29d772b6747aa75ce372f2fde3f36f13a'
const base_id = 'appQUqGm9xuFzgijB'

const table_names = {
	'source_tweets': 'tblkOLiiAC4P7YUak',
	'source_tweet_lists': 'tblHfHQl7Ly823Ck5',
}


export const load: PageLoad = async (event) => {
	const client = new Airtable(api_key, base_id, table_names.source_tweets);
	try {
        const records = await client.getRecords();
		console.log("#records ",records);
        for(const record of records) {
            console.log('Retrieved', record.get('id'));
        }
		return {
			records,
		};
    } catch(err) {
        console.error(err);
    }	
};
