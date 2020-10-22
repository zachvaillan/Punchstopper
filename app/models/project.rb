class Project < ApplicationRecord

    validates :description, length: { maximum: 135 }

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: "User"

end
