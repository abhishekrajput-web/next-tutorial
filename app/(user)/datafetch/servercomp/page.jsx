// import React from 'react';
// import { Suspense } from 'react';
// import DataFetch from './dataFetch';
// import Loading from '../Loading';

// const page = async ({searchParams}) => {
//   // const searchparams = await searchParams;
//   // const userName = searchparams.name;
//   // console.log(userName);
//   // const res = await fetch(`https://api.genderize.io/?name=${userName}`);
//   // const data = await res.json();
//   // console.log(data);

//   // const isProperName = /^[A-Za-z\s]+$/.test(userName.trim());

//   // if(!userName || userName.trim().length < 2 || !isProperName){
//   //   return (
//   //     <div>
//   //       <h1>please provide a proper name</h1>
//   //     </div>
//   //   )
//   // }

//   return (
//     <div className='grid grid-cols-2 gap-5'>
//       <Suspense fallback={<Loading/>}>
//       <DataFetch searchparams={searchParams}/>
//       </Suspense>
//     </div>
//   )
// }

// export default page;



import React, { Suspense } from 'react';
import Loading from '../loading';
import DataFetch from './dataFetch';

const Page = ({ searchParams }) => {
  return (
    <div className='grid grid-cols-2 gap-5'>
      <Suspense fallback={<Loading />}>
        <DataFetch searchParams={searchParams} />
      </Suspense>

      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat libero laborum ad possimus et necessitatibus atque cupiditate reprehenderit maiores incidunt dolores quam quaerat recusandae est porro aliquid eligendi veniam, repellendus neque corrupti quibusdam nostrum deleniti. Aut vitae, modi rerum expedita aliquam fugiat cumque dignissimos error, laboriosam eveniet maiores molestiae sit nostrum blanditiis culpa temporibus fuga nam vero facere consequuntur ipsam provident! Excepturi ad sed assumenda mollitia ratione doloribus repellat nemo sapiente sit cumque, explicabo exercitationem ducimus optio in quam. Culpa reiciendis dolores quam laborum qui quos vero placeat obcaecati voluptatum praesentium dolorem magnam sed aut hic repudiandae suscipit modi a saepe, tempora enim voluptatibus soluta. Molestiae, explicabo beatae? Quam officia illum quisquam alias aperiam fuga quod doloribus rerum culpa consequatur, tempora molestias incidunt sed. Illo amet beatae quos error fugit hic nobis aspernatur, ipsa at deserunt animi inventore cum eaque, culpa pariatur. Quidem ullam recusandae fugiat quam! Similique praesentium magni inventore sint sequi officia consectetur magnam dolorum, ut sapiente animi dicta ratione iusto illo id asperiores ea itaque qui sunt, saepe sit perferendis omnis. Blanditiis nesciunt hic iste fugiat! Nemo harum quae dicta iste, repellendus earum ut nulla excepturi qui quisquam. Odit deleniti hic explicabo sint repudiandae, assumenda facere illo vel quasi officia laudantium cumque a sunt, quis nobis obcaecati. Cum fugit laudantium id facilis beatae consequuntur modi, esse earum, deleniti, consectetur sint reiciendis voluptates voluptatem! Eum quisquam, vel impedit culpa praesentium nesciunt perspiciatis perferendis veritatis? Expedita iusto eius inventore sint voluptates soluta repellendus quisquam delectus dolorem odit optio, laboriosam, quis harum omnis saepe culpa laborum officiis nemo. Aperiam corrupti fuga dignissimos inventore repellendus eveniet cum praesentium aut sunt suscipit! Quis mollitia repellat aperiam tenetur alias sunt nostrum cum. Iusto, inventore ad vero accusantium natus odio sint. Ut modi, veritatis autem repellendus voluptas dolore accusantium perspiciatis rerum excepturi id ipsum mollitia sed est in quasi odio minima quibusdam eligendi et sunt harum! Distinctio corporis dolor ad at illo quis vel molestias sed asperiores, pariatur id consectetur maiores! Dicta quia similique nostrum quod porro voluptatum ducimus quasi nulla tempore eveniet quis, saepe, magnam aspernatur maiores vel neque velit. Nesciunt unde dolorem error odio quam animi eos corporis temporibus, quas, tempora inventore vel illo. Nostrum eligendi neque expedita odit magni architecto quod optio ut impedit consequatur sit tempora repellendus dolore sed a aperiam et, iure quaerat. Maxime iusto distinctio sapiente vero laudantium error dolor recusandae harum consequatur mollitia maiores ipsam possimus in sint aspernatur tenetur similique voluptate fugit, tempore esse doloremque. Ullam fugit sequi delectus aut accusamus mollitia dolorum unde eveniet esse animi voluptate, culpa odio saepe maiores est ex rem tempore cum eos vitae similique atque illum corporis! Voluptatum totam inventore cumque assumenda. Quod sunt vero incidunt, quisquam ratione optio doloribus libero animi, omnis consequatur dicta impedit quas quibusdam debitis enim aspernatur quasi itaque suscipit unde! Voluptatem quas alias voluptates consectetur unde beatae aliquam quidem sed inventore aspernatur blanditiis dolorum aut maxime tempora, ipsum similique incidunt, facilis ducimus. Cumque itaque illo ratione temporibus nesciunt quasi qui dolor non incidunt eius.</h1>
    </div>
  );
};

export default Page;
