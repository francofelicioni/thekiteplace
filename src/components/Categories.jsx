import { categories } from "../utils/data";
import CategoryItem from "./CategoryItem";
import { Container } from '../styles/Categories_sc';

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
