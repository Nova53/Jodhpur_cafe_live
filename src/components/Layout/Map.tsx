export default function JodhpurMap({
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114487.29602505716!2d72.94814125112374!3d26.270489821931143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1755117324307!5m2!1sen!2sin",
  title = "Jodhpur, Rajasthan — Map",
}: {
  src?: string;
  title?: string;
}) {
  return (
    <div className="w-[70%] max-w-4xl mx-auto">
      {/* <h1 className="text-2xl font-semibold mb-3">{title}</h1> */}
      {/* Responsive 4:3 container */}
      <div
        className="relative w-full rounded-2xl shadow border overflow-hidden"
        style={{ paddingBottom: "50%", height: 0 }}
      >
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={title}
        />
      </div>

    </div>
  );
}
