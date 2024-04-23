// import { client } from "@/sanity/lib/client";

// const aboutQuery = `
//     *[_type == "about"]{
//       name,
//       image{
//         ...,
//         asset->{
//           ...
//         }
//       },
//       subtitle,
//       description
//     }
//   `;

// export const getAbout = () =>{
// 	client
// 		.fetch(aboutQuery)
// 		.then((data) => (data[0])) // Assuming there's only one "about" document
// 		.catch((error) => console.error('Error fetching data:', error));
// 		return data
// }
