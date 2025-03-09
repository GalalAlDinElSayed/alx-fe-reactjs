import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // قائمة الوصفات
  searchTerm: '', // مصطلح البحث
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [], // الوصفات المصفاة
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export default useRecipeStore;
