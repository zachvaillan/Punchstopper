json.extract! @project, :id, :category, :location, :title, :description, :end_date, :funding_goal, :funding_amount
json.photoUrl url_for(@project.photo)
json.rewards @project.rewards