json.extract! project, :id, :title, :description, :end_date, :funding_goal, :funding_amount
json.likes chirp.likes.count
json.liked_by_current_user !!chirp.likes.find_by(user_id: current_user.id)
