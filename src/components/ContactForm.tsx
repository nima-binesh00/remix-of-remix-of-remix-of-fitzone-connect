export function ContactForm() {
  const inputClass =
    "w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors";

  return (
    <form
      className="bg-slate-900 p-8 rounded-xl border border-slate-700 space-y-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="name" className="block text-white font-semibold mb-2">
          Full Name
        </label>
        <input type="text" id="name" name="name" required className={inputClass} placeholder="John Doe" />
      </div>

      <div>
        <label htmlFor="email" className="block text-white font-semibold mb-2">
          Email Address
        </label>
        <input type="email" id="email" name="email" required className={inputClass} placeholder="john@example.com" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-white font-semibold mb-2">
          Phone Number
        </label>
        <input type="tel" id="phone" name="phone" className={inputClass} placeholder="+1 (555) 123-4567" />
      </div>

      <div>
        <label htmlFor="message" className="block text-white font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your fitness goals..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3"
      >
        Send Message
        <i className="ri-send-plane-line" />
      </button>
    </form>
  );
}
