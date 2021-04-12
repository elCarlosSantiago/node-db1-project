-- Database Queries

-- Find all customers with postal code 1010
SELECT * FROM customers
where postalcode = 1010;

-- Find the phone number for the supplier with the id 11
SELECT phone FROM suppliers
where supplierid = 11;
-- List first 10 orders placed, sorted descending by the order date
SELECT * FROM orders 
ORDER BY orderDate DESC
LIMIT 10;
-- Find all customers that live in London, Madrid, or Brazil
SELECT * FROM customers
	where 
(city like 'london') or
(city like 'madrid') or 
(country like 'brazil');
-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO customers (customername, contactname, address, city, postalcode, country)
VALUES ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth');

-- Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE customers
SET postalcode = 11122
WHERE customerid = 92;
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
-- The code below produces a table with 70 records (cities) and a column counting how many times that city appears in the data set
SELECT distinct city, COUNT( city) AS Count
from customers
GROUP BY city;

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT * FROM suppliers
where length(suppliername) >20;