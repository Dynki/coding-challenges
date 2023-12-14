const BASE_URL = 'https://api.datamuse.com/words?ml=';

export const fetchSynonyms = async (word: string): Promise<string[]> => {

    return fetch(`${BASE_URL}${word}`)
        .then((response) => response.json())
        .then((data) => data.map((item: { word: string }) => item.word))
}