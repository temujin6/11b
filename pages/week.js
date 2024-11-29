import { useState } from "react";

export default function Week() {
  const [grid, setGrid] = useState(false);

  const data = [
    {
      id: 1,
      title: "Test 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim justo, convallis eget lacus vel, egestas rutrum augue. Donec sed elit lorem. ",
    }, // 0
    {
      id: 2,
      title: "Test 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim justo, convallis eget lacus vel, egestas rutrum augue. Donec sed elit lorem. ",
    }, // 1
    {
      id: 3,
      title: "Test 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim justo, convallis eget lacus vel, egestas rutrum augue. Donec sed elit lorem. ",
    }, // 2
    {
      id: 4,
      title: "Test 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim justo, convallis eget lacus vel, egestas rutrum augue. Donec sed elit lorem. ",
    }, //3
    {
      id: 4,
      title: "Test 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim justo, convallis eget lacus vel, egestas rutrum augue. Donec sed elit lorem. ",
    }, //3
    {
      id: 4,
      title: "Test 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim justo, convallis eget lacus vel, egestas rutrum augue. Donec sed elit lorem. ",
    }, //3
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Нийтлэлүүд</h1>
        <button
          onClick={() => setGrid(!grid)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {grid ? "Жагсаалт харах руу шилжих" : "Grid View рүү шилжих"}
        </button>
      </div>
      <div
        className={
          grid == true ? "grid grid-cols-1 sm:grid-cols-2 gap-6" : "space-y-4"
        }
      >
        {data.map((items, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-4"
          >
            <h2 className="text-xl font-semibold mb-2">{items.title}</h2>
            <p className="text-gray-600">{items.description}</p>
          </div>
        ))}

        {/* {data.map((data) => {
          return <div>{data.title}</div>;
        })}
        {data.map((data, index) => {
          return (
            <div key={index}>
              {data.title} || {data.description}
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
