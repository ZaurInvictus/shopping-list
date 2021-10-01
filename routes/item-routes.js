const router = require("express").Router();
const Items = require("../models/item-models");

// GET ALL
router.get("/", (req, res) => {
  Items.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => res.send(err));
});

// POST
router.post("/", async (req, res) => {
  // const item = req.body
  const { name, description, count } = req.body;

  try {
    // Check if name already used 
    let item = await Items.findBy({ name });
    if (item) {
      return res.status(400).json({
        errors: [
          { msg: `Sorry, item with the name '${name}' has already been registered.` },
        ],
      });
    }

    const newItem = await Items.add({ name, description, count });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: `Could not add item` }],
      error: error,
    });
  }
});

// GET BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Items.findById(id);
    if (!item) {
      return res.status(404).json({
        errors: [{ msg: `Could not find item with ID: ${id}` }],
      });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: "Server error." }],
      error: error,
    });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const newItemData = req.body;
  const name = req.body.name
  try {
    const item = await Items.updateById(id, newItemData);
    if (!item) {
      return res.status(400).json({
        errors: [{ msg: `Could not find item with ID: ${id}` }],
      });
    }

    // RETURNS UPDATED ITEM
    const updatedItem = await Items.findById(id);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: "Error updating data." }],
      error: error,
    });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const count = await Items.deleteById(id);
    if (!count) {
      return res.status(404).json({
        errors: [{ msg: `Could not find item with ID: ${id}` }],
      });
    }
    res.status(200).json(count);
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: `Could not delete item with ID: ${id}` }],
      error: error,
    });
  }
});

module.exports = router;
