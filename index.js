document.addEventListener('DOMContentLoaded', () => {
    // Toggle navigation menu on smaller screens
    const navLinks = document.querySelector('.nav__links');
    const toggleNav = () => navLinks.classList.toggle('active');

    document.querySelector('.nav__icons').addEventListener('click', toggleNav);

    // Implementing expandable categories (example structure, adapt as needed)
    const categories = [
        { name: 'Men', subcategories: ['Top wear', 'Bottom Wear', 'Flip-Flops'] },
        { name: 'Women', subcategories: ['Top wear', 'Bottom Wear', 'Flip-Flops'] },
        { name: 'Kids', subcategories: ['Top wear', 'Bottom Wear', 'Flip-Flops'] }
    ];

    const createCategoryList = () => {
        const container = document.createElement('div');
        container.classList.add('category-list');

        categories.forEach(category => {
            const categoryItem = document.createElement('div');
            categoryItem.classList.add('category-item');
            const categoryName = document.createElement('h3');
            categoryName.innerText = category.name;
            categoryName.classList.add('category-name');
            categoryItem.appendChild(categoryName);

            const subCategoryList = document.createElement('ul');
            subCategoryList.classList.add('subcategory-list');

            category.subcategories.forEach(sub => {
                const subCategoryItem = document.createElement('li');
                subCategoryItem.classList.add('subcategory-item');
                subCategoryItem.innerText = sub;
                subCategoryList.appendChild(subCategoryItem);
            });

            categoryItem.appendChild(subCategoryList);
            container.appendChild(categoryItem);
        });

        document.body.appendChild(container);
    };

    createCategoryList();

    // Toggle subcategories on click
    document.querySelectorAll('.category-name').forEach(item => {
        item.addEventListener('click', () => {
            const subCategoryList = item.nextElementSibling;
            subCategoryList.classList.toggle('active');
        });
    });

    // Search functionality
    const searchIcon = document.querySelector('.search-icon');
    searchIcon.addEventListener('click', () => {
        const searchQuery = prompt('Enter your search query:');
        if (searchQuery) {
            alert(`Searching for: ${searchQuery}`);
            // Implement actual search functionality here
        }
    });
});
