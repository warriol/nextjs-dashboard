export async function fetchApiExterna() {
    try {   
        const res = await fetch('https://fakestoreapi.com/products').then(res => res.json());
        return res;
    } catch (error) {
        console.error('Api Externa Error:', error);
        throw new Error('Failed to fetch revenue data de api externa.');
    }
}
