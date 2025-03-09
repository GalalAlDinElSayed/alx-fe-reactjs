import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ إضافة useNavigate

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // ✅ الانتقال إلى الصفحة الرئيسية بعد الحذف
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
