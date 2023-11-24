export async function getCatFilters(filter:string, currentPage:number) {
    const res = await fetch(`https://your-energy.b.goit.study/api/filters?filter=${filter}&page=${currentPage}&limit=12`);

    if (!res.ok) {
    throw new Error('Failed to fetch data')
    };
    return res.json();
};