migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s8pflf7pogc0112")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "va3wbqs5",
    "name": "location",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qt59yzvg",
    "name": "techstack",
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
  const collection = dao.findCollectionByNameOrId("s8pflf7pogc0112")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "va3wbqs5",
    "name": "Location",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qt59yzvg",
    "name": "TechStack",
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
