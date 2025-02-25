import React from "react";

export function Authors() {
  const authors = [
    {
      name: "J.K. Rowling",
      title: "Author of Harry Potter",
      description:
        "J.K. Rowling is a British author, best known for writing the iconic Harry Potter series that captured the hearts of millions around the world.",
      photo:
        "https://images.pexels.com/photos/3727468/pexels-photo-3727468.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "James Clear",
      title: "Author of Atomic Habits",
      description:
        "James Clear is a bestselling author and expert in habit formation. His book Atomic Habits has transformed lives globally.",
      photo:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "George R.R. Martin",
      title: "Author of A Game of Thrones",
      description:
        "George R.R. Martin is an American novelist, celebrated for creating the epic fantasy series A Song of Ice and Fire, adapted into Game of Thrones.",
      photo:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Harper Lee",
      title: "Author of To Kill a Mockingbird",
      description:
        "Harper Lee was a Pulitzer Prize-winning author known for her profound storytelling in To Kill a Mockingbird.",
      photo:
        "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-gray-800 mb-12">
          Meet the Authors
        </h2>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {authors.map((author, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300"
            >
              {/* Author Photo */}
              <img
                src={author.photo}
                alt={author.name}
                className="w-full h-48 object-cover"
              />
              {/* Author Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {author.name}
                </h3>
                <p className="text-sm text-yellow-500 font-medium mb-3">
                  {author.title}
                </p>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {author.description}
                </p>
                {/* Social Icons */}
                <div className="mt-4 flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-500 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 0v24h-24v-24h24zm-14.654 18v-7.577h-2.852v-2.829h2.852v-2.067c0-1.636.949-4.027 4.022-4.027l2.944.013v3.293h-2.13c-.266 0-.638.132-.638.7v2.088h2.774l-.412 2.829h-2.362v7.577h-3.176z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-400 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 6.626 5.373 12 12 12 6.626 0 12-5.373 12-12 0-6.626-5.373-12-12-12zm-.085 18.873v-7.277h2.957l.443-2.944h-3.399v-1.424c0-.854.232-1.533 1.443-1.533h1.564v-2.636c-.266-.036-1.179-.115-2.243-.115-2.227 0-3.743 1.35-3.743 3.836v2.05h-2.515v2.944h2.515v7.277h3.178z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-300 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.573 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.555-3.594-1.555-2.798 0-5.072 2.265-5.072 5.063 0 .396.045.779.132 1.147-4.215-.211-7.953-2.23-10.452-5.289-.44.754-.693 1.63-.693 2.565 0 1.77.899 3.332 2.264 4.248-.834-.027-1.618-.255-2.303-.635v.065c.001 2.495 1.77 4.573 4.116 5.048-.43.116-.882.177-1.348.177-.33 0-.652-.031-.967-.092.654 2.042 2.548 3.53 4.796 3.57-1.755 1.375-3.971 2.196-6.382 2.196-.415 0-.824-.025-1.229-.072 2.276 1.463 4.983 2.318 7.885 2.318 9.461 0 14.632-7.841 14.632-14.632 0-.223-.005-.444-.015-.664.988-.716 1.844-1.609 2.523-2.631z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Authors;
