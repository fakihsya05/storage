-- USER DDL
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    img VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CATEGORIES DDL
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name_categories VARCHAR(100) NOT NULL
);

-- PRODUCT DDL
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name_products VARCHAR(100) NOT NULL,
    quantity INTEGER NOT NULL,
    url_img VARCHAR(255),
    user_id INTEGER,
    categories_id INTEGER, 
    create_by INTEGER, 
    update_by INTEGER,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (categories_id) REFERENCES categories(id),
    FOREIGN KEY (create_by) REFERENCES users(id),
    FOREIGN KEY (update_by) REFERENCES users(id)
);
