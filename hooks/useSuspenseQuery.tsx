import { useState, useEffect } from "react";

export function useSuspenseQuery<T>(
    fetchFn: () => Promise<T>,
    dependencies: any[] = []
): { data: T | undefined; isLoading: boolean; error: any } {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await fetchFn();

                if (isMounted) {
                    setData(result);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                }
            } finally {
                if (isMounted) {
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 800);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    return { data, isLoading, error };
}
