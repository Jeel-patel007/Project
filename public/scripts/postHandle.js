let posts = " ";
let postContainer = document.getElementById('post-container');
let isValid = true;
const getPosts = async () => {
  const responce = await fetch('/posts');
  const data = await responce.json();
  showPosts(data);
}

getPosts();
{/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${element.author}</p> */ }

const showPosts = (data) => {
  console.log(data)
  posts = '';
  data.result.forEach((element) => {
    posts += ` <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-10 ">
        <a href="#">
            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${element.title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${element.description}</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
    `;
  })
  postContainer.innerHTML = posts;
}

const handlePost = () => {
  posts = `
  <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" id="postForm" >
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">Post</h5>
          <div>
              <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input type="text" name="title" id="title" class="require bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
          </div>
          <div>
              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <input type="text" name="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
          </div>
         
          <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onclick="handlePostData()">Click here to add post</button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onclick="getPosts()">Go Back</button>
          </div>
      </form>
  </div>
  `;
  postContainer.innerHTML = ' ';
  postContainer.innerHTML = posts;
}

const handlePostData = async () => {
  validation();
  if (isValid) {
    const formData = document.getElementById('postForm')
    let data = new FormData(formData);
    const params = new URLSearchParams(data);
    data = await new Response(params).text();
    const result = await fetch('/addPost', {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      body: data
    });

    if (result.status == 200) {
      console.log('post added');
      setTimeout(() => {
        window.location.href = `http://localhost:3000/`;
      }, 2000)
    } else {
      console.log('something went wrong !!');
    }
  }
}

const validation = () => {
  isValid = true;
  const tags = document.querySelectorAll('.require');
  tags.forEach((elem) => {
    if (!elem.value.length || elem.value.trim() == "") {
      let errorElement = document.createElement("error");
      errorElement.innerText = "require";
      elem.insertAdjacentElement("afterend", errorElement);
      isValid = false;
    }
  })
}