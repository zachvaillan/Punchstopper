json.array! @projects do |project|
    json.extract! project, :id, :title, :description, :funding_goal, :funding_amount, :owner_id, :end_date, :image_url, :category
    json.owner project.owner.name
end