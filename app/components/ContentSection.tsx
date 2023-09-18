import Box from './Box';

export default function ContentSection() {
  return (
    <div className="mt-7">
      <h1 className="text-2xl font-bold mb-4 underline">High Prep</h1>
      <div className='flex flex-col'>
      <div className="flex justify-between gap-3">
        <Box name="Box 1" description="Description for Box 1" />
        <Box name="Box 2" description="Description for Box 2" />
        <Box name="Box 3" description="Description for Box 3" />
        <Box name="Box 4" description="Description for Box 4" />
      </div>
      </div>

      <br></br>
       <br></br>
       
      <h1 className="text-2xl font-bold mb-4 underline">Mid Prep</h1>
      <div className="flex justify-between space-x-4">
        <Box name="Box 1" description="Description for Box 1" />
        <Box name="Box 2" description="Description for Box 2" />
        <Box name="Box 3" description="Description for Box 3" />
        <Box name="Box 4" description="Description for Box 4" />
      </div>
     
      <br></br>
       <br></br>

      <h1 className="text-2xl font-bold mb-4 underline">Low Prep</h1>
      <div className='flex flex-col'>
      <div className="flex justify-between gap-3">
        <Box name="Box 1" description="Description for Box 1" />
        <Box name="Box 2" description="Description for Box 2" />
        <Box name="Box 3" description="Description for Box 3" />
        <Box name="Box 4" description="Description for Box 4" />
      </div>

      <div className=" mt-3 flex justify-center gap-6">
        <Box name="Box 5" description="Description for Box 5" />
        <Box name="Box 6" description="Description for Box 6" />
        <Box name="Box 7" description="Description for Box 7" />
      </div>
      </div>
    </div>
  );
};

