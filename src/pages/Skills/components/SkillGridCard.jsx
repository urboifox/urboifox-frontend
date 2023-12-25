export default function SkillGridCard({ skill }) {
  return (
    <div className="skillGridCard group">
      <span className="joint -top-px -left-px"></span>
      <span className="joint -top-px -right-px"></span>
      <span className="joint -bottom-px -left-px"></span>
      <span className="joint -bottom-px -right-px"></span>
      <div className="font-light text-[var(--main-color-dimmed)] opacity-0 md:group-hover:opacity-100 transition-all md:group-hover:scale-110 duration-500 text-sm md:text-2xl">
        {skill.name}
      </div>
      <div className="w-full transition-colors duration-300 border border-transparent md:hover:border-[var(--main-color-dimmed)] h-full absolute  flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          draggable={false}
          src={skill.img}
          alt={`${skill.name} logo`}
          className="w-1/3 md:group-hover:opacity-0 transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
