// interface Product{
//     id: string;
//     name:string;
//     price:number;
//     image:string;
//     categories:string[];// Array<string>
// }

// type Product = {
//     id: string;
//     name: string;
//     price: number;
//     image: string;
//     categories: string[];// Array<string>
// }

// let products: Product[] = [];

// products.push({
//     id: "lvkttlv",
//     name: "Laptop",
//     price: 10000,
//     image: "",
//     categories: ['laptop','lenovo']
// })

//@ts-ignore
// function add(a: number|string,b: number|string) : number|string
// {
//     if(typeof a === 'string' && typeof b=== 'string')
//     return`${a} ${b}`;
//     if(typeof a === 'number' && typeof b=== 'number')
//     return a+b;
//     throw new Error('Invalid');
// }
//#####################################
// const add=(a: number|string,b: number|string) =>
// {
//     if(typeof a === 'string' && typeof b=== 'string')
//     return`${a} ${b}`;
//     if(typeof a === 'number' && typeof b=== 'number')
//     return a+b;
//     throw new Error('Invalid');
// };

// console.log(add(3,7));

// type AddFunctionReturnType = ReturnType<typeof add>;

//#####################################

// type Shape = {
//     name: 'circle' | 'rectangle' | 'square';
// }

// type Circle = Shape & {
//     // name:'circle';
//     radius: number;
// }

// type Rectangle = Shape & {
//     // name: 'rectangle';
//     height: number;
//     width: number;
// }

// type Square = Shape & {
//     // name: 'square';
//     side: number;
// }

// // const isCircle=(shape: Circle | Rectangle | Square): shape is Circle=> typeof (shape as Circle).radius === 'number';
// const isCircle = (shape: Circle | Rectangle | Square): shape is Circle =>
//     shape.name === 'circle' &&
//     typeof (shape as Circle).radius === 'number';


// const isRectangle = (shape: Circle | Rectangle | Square): shape is Rectangle =>
//     shape.name === 'rectangle' &&
//     'height' in shape &&
//     'width' in shape &&
//     typeof shape.height === 'number' &&
//     typeof shape.width === 'number';

// const isSquare = (shape: Circle | Rectangle | Square): shape is Square =>
//     shape.name === 'square' &&
//     'radius' in shape &&
//     typeof shape.radius === 'number';


// function getArea(shape: Circle | Rectangle | Square): number {
//     if (isCircle(shape)) {
//         return 3.1416 * shape.radius * shape.radius;
//     }

//     if (isRectangle(shape)) {
//         return shape.height * shape.width;
//     }

//     if (isSquare(shape)) {
//         return shape.side * shape.side;
//     }

//     console.log(getArea({ name: 'circle', side: 5 }));
// }

//#####################################


// type Shape = {
//     name: 'circle';
//     radius: number;
// } | {
//     name: 'square';
//     side: number;
// } | {
//     name: 'rectangle'
//     height: number;
//     width: number;
// }

// const getArea = (shape: Shape): number => {
//     switch (shape.name){
//         case 'circle':
//             return 3.1416 * shape.radius * shape.radius;
//         case 'square':
//             return shape.side * shape.side;
//         case 'rectangle':
//             return shape.width * shape.height;
//         default:
//         throw new Error("Invalid Shape");
//     }
// }

// console.log(getArea({name: 'circle',radius:5}));

//####################################

let a: string | null | undefined;

a = undefined;

//####################################
// const add= <T,>(a:T, b:T):T =>{
//     if(typeof a==='string')
//     {
//         return `${a} ${b}` as T;
//     }
//     if(typeof a==='number' && typeof b==='number')
//     {
//         return a+b as T;
//     }
//     throw new Error('Invalid Params'); 
//     // return a+b;
// }

// add(5,'6');

//####################################
type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    categories: string[];// Array<string>
}

type ProductMetaData = Pick<Product, 'name' | 'id'>;
type ProductMinimal = Omit<Product, 'image' | 'categories'>;
type Product2 = Pick<Product, 'id'> &
    Partial<Pick<Product, 'name' | 'price'> &
        Required<Pick<Product, 'image'>>>