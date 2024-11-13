1. What is a middleware notion
2. ```js
   app.use((req, res, next) => {
     console.log(`${req.method} ${req.url}`);
     next();
   });
   ```
3. Morgan

   ```js
   app.use(morgan("tiny"));
   ```

4. ```js
   app.all("*", async (req, res) => {
     res
       .status(404)
       .json({ message: `${req.method} ${req.url}: Route not found` });
   });
   ```

5. Error handling middleware notion
6. Validation errors in middleware
7. Params middleware
   ```js
   router.param("catId", async (req, res, next, catId) => {
     const cat = ...
     req.cat = cat;
   });
   ```
8. Multer
