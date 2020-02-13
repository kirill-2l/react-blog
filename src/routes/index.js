import FeaturedPosts from "../components/FeaturedPosts";

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: FeaturedPosts
  },
  {
    path: '/posts',
    name: 'Новости',
    component: FeaturedPosts
  },
  {
    path: '/posts/:postSlug',
    name: 'Внутренняя страница поста',
    component: FeaturedPosts
  }
];

export default routes;
