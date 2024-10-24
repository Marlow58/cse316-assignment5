import React from 'react'

// The ideal image should be in the following style:
// Dropdown menu on top (login) - Dropdown.jsx
// Characters have the following traits:
// ID: Required, 
// Name: Required,
// Creator: Required
// Owner: Required (but character trading feature is beyond CSE316, so we will leave it out at the moment)
// Other aspects: Optional

const AddChar = (username) => {
  // As long as a character name and story are given, we're fine
  // One design problem
  const [characterID, characterName, characterStory, characterImg, characterWorld, custom] = React.useState("");

  // Export the form data
  // Right now, I will use the alert to test the waters.
  // In actuality, more than 1 characters can share the name
  const validate = () => {
    if(characterID == null || characterStory == null){
      alert("Your character must need at least a name or a story.");
    }
    // Now let's generate an ID
    characterID = Math.floor(Math.random() * (2^16 - 1 + 1)) + 1;
    while(username.getItem(characterID) != null){
      characterID = Math.floor(Math.random() * (2^16 - 1 + 1)) + 1;
    }
    console.log(JSON.stringify(formData));
  }

  const addFormData = (event) => {
    // APPEND
    // Name of field is custom
    // Value of that field is customValue
    event.preventDefault
    append(custom, customValue);
  }

  const addImageData = () => {
    // APPEND
    // Name of field is custom
    // Value of that field is customValue
    characterImg.append(characterImg);
  }

  const onChangeForm = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    // Set the values in [Key,Value] pairs
    setForm(values => ({...values, [name]: value}))
  }

  return (
    // Character form
    <form onSubmit={validate} style={{marginTop: "78px", display: "flex", flexDirection:"column", flex:"1 1 auto"}}>
      <h1>Add New Character</h1>
      {/* Character ID is generated and is not an input here. */}
      {/* Required items: Character Name */}
      {/* Beyond CSE316: Multilingual support may also be in the cards */}
      <label htmlFor="characterName" className="col-sm-2 col-form-label">Character Name</label><br />
      <input type="text" value={characterName} id="characterName" className="form-control" onChange={onChangeForm} /><br />

      {/* Character Universe is not required but recommended */}
      <label htmlFor="characterWorld" className="col-sm-2 col-form-label">Associated Worlds</label><br />
      <input type="text" value={characterWorld} id="characterWorld" className="form-control" onChange={onChangeForm} /><br />
      
      {/* A button to add more form items. How can I implement THAT? */}
      {/* If added, this will add a K/V value on the Character form. */}
      {/* It's noteworthy that we cannot do that within another JSX since JSX cannot accept another JSX file as props */}
      <form onSubmit={addFormData}>
        <label htmlFor="characterField" className="col-sm-2 col-form-label">Add Field</label><br />
        <input type="text" value={custom} className="form-control" id="characterField" name="characterName" onChange={onChangeForm} />
        <input type="submit" value="Add Field" className="btn btn-primary"></input>
      </form>
      
      {/* Required items: Character Story */}
      {/* A text description will do for now */}
      <label htmlFor="characterStory">Character Story: </label>
      {/* Beyond CSE316 - Import a WYSIWYG editor, and export this into a markdown or XHTML file */}
      {/* This (along with the rest of the text stuff) needs to be an tracked */}
      {/* Radio button and anything fancy is beyond the scope here */}
      <textarea value={characterStory} id='characterStory' name='characterStory' onChange={onChangeForm} className="form-control"></textarea>

      {/* characterImg is an array of strings(directories of images) */}
      {/* Now our goal is to put the image in somewhere */}
      <form onSubmit={addImageData}>
        <label htmlFor="characterImg"></label>
        <div className="input-group mb-3">
          <input type="file" value={characterImg} id="characterImg" className="form-control"></input>
        </div>
      </form>
      
      <input type="submit" value="Submit" className="btn btn-primary"></input>
    </form>
  )
}

export default AddChar