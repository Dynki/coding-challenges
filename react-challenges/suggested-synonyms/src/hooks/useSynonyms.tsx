import { useState } from "react"
import { fetchSynonyms } from "../api/fetchSynonyms"
  
export const useSynonyms = () => {
    const [synonyms, setSynonyms] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getSynonyms = async (word: string) => {
        setIsLoading(true)
        const synonyms = await fetchSynonyms(word)
        setSynonyms(synonyms)
        setIsLoading(false)
    }

    return {
        synonyms,
        getSynonyms,
        isLoading   
    }
}