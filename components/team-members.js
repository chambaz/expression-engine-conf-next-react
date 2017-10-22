import decode from 'decode-html'

export default props => {
  let teamMembers = []

  // build array of team members
  props.data.team.forEach((team, i) => {
    teamMembers.push(
      <li key={i} className="team-members__member">
        <img className="team-members__avatar" src={team.avatar} />
        <h3 className="team-members__title">{team.title}</h3>
        <div
          className="team-members__body"
          dangerouslySetInnerHTML={{ __html: decode(team.body) }}
        />
      </li>
    )
  })

  return (
    <div>
      <h2 className="component-title" id="team-members">
        Team Members
      </h2>
      <div className="team-members">
        <header className="team-members__header">
          <h2 className="team-members__heading">{props.data.heading}</h2>
          <div
            className="team-members__body"
            dangerouslySetInnerHTML={{ __html: decode(props.data.body) }}
          />
        </header>
        <ul className="team-members__list">{teamMembers}</ul>
      </div>
    </div>
  )
}
