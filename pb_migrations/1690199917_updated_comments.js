migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zo3yrn2l92jb1ry")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x6stlm7t",
    "name": "comment_text",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zo3yrn2l92jb1ry")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x6stlm7t",
    "name": "comment",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
