json.array! @projects do |project|
    json.extract! project, :id, :title, :description, :funding_goal, :funding_amount, :owner_id, :end_date, :category
    json.photoUrl url_for(project.photo)
    json.owner project.owner.name
end