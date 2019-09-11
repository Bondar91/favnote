const initialState = {
  notes: [
    {
      id: 1,
      title: 'React on my mind!',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
    {
      id: 2,
      title: 'React work!',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
    {
      id: 3,
      title: 'React and Redux!',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
    {
      id: 4,
      title: 'Vue.js vs React!',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'React number1!',
      articleLink: 'https://youtube.com',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
    {
      id: 2,
      title: 'React work!',
      articleLink: 'https://youtube.com',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
    {
      id: 3,
      title: 'React and Redux!',
      articleLink: 'https://youtube.com',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
    {
      id: 4,
      title: 'Vue.js vs React!',
      articleLink: 'https://youtube.com',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
    {
      id: 5,
      title: 'Vue.js vs React2!',
      articleLink: 'https://youtube.com',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
  ],
  twitters: [
    {
      id: 1,
      title: 'React number1!',
      twitterName: 'hello_roman',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
    {
      id: 2,
      title: 'React work!',
      twitterName: 'sarah_edo',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
    {
      id: 3,
      title: 'React and Redux!',
      twitterName: 'mjackson',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
    {
      id: 4,
      title: 'Vue.js vs React!',
      twitterName: 'dan_abramov',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur iure iusto quasi nostrum blanditiis nisi labore quis tempora beatae?',
      created: '1 day',
    },
  ],
};

const rootReducer = (state = initialState) => {
  return state;
};

export default rootReducer;
