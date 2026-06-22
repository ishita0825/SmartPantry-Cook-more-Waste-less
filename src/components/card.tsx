interface CardProps {
  title: string;
  description: string;
  icon: string;
}

function Card({ title, description, icon }: CardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-900">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default Card;
