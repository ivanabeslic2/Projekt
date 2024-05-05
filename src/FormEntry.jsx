import { useState } from 'react';

export const FormEntry = () => {
  const [formData, setFormData] = useState({
    naziv: '',
    lokacija: '',
    vrijeme: '',
    organizator: '',
    voditelj: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const sendData = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={sendData}>
      <div>
        <label>
          Naziv:
          <input
            type="text"
            name="naziv"
            value={formData.naziv}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Lokacija:
          <input
            type="text"
            name="lokacija"
            value={formData.lokacija}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Vrijeme:
          <input
            type="date"
            name="vrijeme"
            value={formData.vrijeme}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Organizator:
          <input
            type="text"
            name="organizator"
            value={formData.organizator}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Voditelj:
          <input
            type="text"
            name="voditelj"
            value={formData.voditelj}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Dodaj novu akciju</button>
    </form>
  );
};
