
export function debounce(func: Function, d: number){
    let id: ReturnType<typeof setTimeout>;

    return (city: string)=>{
        if(id) clearTimeout(id);
        id = setTimeout(()=>{
            func(city)
        }, d);
    };
}