import MentorCard from "./MentorsCard"

const TeamGrid=()=>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <MentorsCard />
    <MentorCard />
    <MentorCard />
    <MentorCard /> 
</div>
    )
}
export default TeamGrid