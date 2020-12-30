json.extract! @project, :id, :category, :location, :title, :description, :end_date, :funding_goal, :funding_amount
json.photoUrl url_for(@project.photo)
json.rewards @project.rewards do |reward|
    json.deliver_date reward.deliver_date
    json.description reward.description
    json.min_amount reward.min_amount
    json.id reward.id
    json.title reward.title
    json.backs reward.backs
end
json.backers @project.backers