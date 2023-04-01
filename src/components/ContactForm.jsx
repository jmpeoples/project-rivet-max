export const ContactForm = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
  
      const formData = {};
  
      for (let [key, value] of form) {
        formData[key] = value;
      }
  
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Hide your form
          alert('message is sent');
        } else {
          console.error(response);
          console.log(formData);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <form
        className="w-full max-w-3xl mx-auto px-0 lg:p-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
              htmlFor="email"
              placeholder="notspam@hotmail.ru"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="email"
              type="email"
              name="email"
              required
              placeholder="notspam@hotmail.ru"
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
  };