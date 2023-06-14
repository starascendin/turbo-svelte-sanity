import Airtable from 'airtable';

// records[0].fields["Date converted"]

export interface Fields {
    Notes?: string;
    tweet_url?: string;
    tweet_id?: string;
    tweet_full_text?: string;
    list_id?: string;
    tweet_user_full_url?: string;
    created_at?: string;
}

class AirtableClient {
    constructor(apiKey, baseId, tableName) {
        this.base = new Airtable({ apiKey: apiKey }).base(baseId);
        this.tableName = tableName;
    }

    async getRecords(maxRecords = 100, view = "Grid view") {
        const recordsArray = [];
        await this.base(this.tableName).select({
            maxRecords: maxRecords,
            view: view
        }).eachPage(async (records, fetchNextPage) => {
            records.forEach(record => {
                recordsArray.push(record);
            });

            await fetchNextPage();
        });
        return recordsArray;
    }}

export default AirtableClient