export default function Blog() {
  return (
    <div className=" mx-auto px-5 md:px-10 flex flex-col justify-center items-center">
      <div className="flex justify-between pb-10 items-center flex-wrap gap-20 md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div className="border-2 rounded-md shadow-md shadow-orange-500/75 p-5 flex flex-col justify-center items-start gap-y-10 max-w-md">
          <h2 className="text-2xl font-semibold text-center capitalize">
            Why choose the cyber field
          </h2>
          <p className="text-lg font-medium text-start line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            aperiam delectus amet consequatur optio eum doloribus voluptatibus
            harum velit doloremque perferendis sapiente sit, sed tempore nemo,
            aliquam maxime similique mollitia modi enim, magni quia vero ut.
            Harum dolor nisi pariatur iste culpa laudantium recusandae in
            excepturi porro beatae! Labore, nulla.
          </p>
          <div className="flex justify-center items-start flex-col">
            <button className="text-lg font-medium text-center text-white bg-orange-500 rounded-lg p-2">
              Learn more
            </button>
          </div>
        </div>
        {/* duplicate the above component */}
      </div>
    </div>
  );
}
