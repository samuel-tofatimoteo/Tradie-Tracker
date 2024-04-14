function CreateJob() {
  return (
    <>
      <h1 className="create-job-title">Create job</h1>
      {/* Title */}
      <form>
        <label>
          Title
          <input placeholder="E.g: Fixing light bulb" />
        </label>
      </form>
      {/* Description */}
      <form>
        <label>
          Description
          <input placeholder="E.g: On the second floor, storage room. The main lightbulb is broken. Needs replacing." />
        </label>
      </form>
      {/* Date and Time */}
      <form>
        <label>
          Date and Time
          <input placeholder="E.g: 20/04/2024" />
        </label>
      </form>
      {/* Occurring CLient */}
      <label>
        Occurring Client? <input type="checkbox" name="Occurring Client" />
      </label>
      {/* Occurring Client TRUE */}
      <select>
        <option value="someOption">Company</option>
        <option value="otherOption">Other option</option>
      </select>
    </>
  )
}

export default CreateJob
