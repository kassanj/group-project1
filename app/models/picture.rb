class Picture < ActiveRecord::Base
	has_many :comments

		validates :category, inclusion:(1..3)
		validates :mood, inclusion:(1..3)

		scope :games, -> { where(category: 1)}
		scope :film, -> { where(category: 2)}
		scope :music, -> { where(category: 3)}

		scope :chill, -> { where(category: 1)}
		scope :offbeat, -> { where(category: 2)}
		scope :epic, -> { where(category: 3)}


		def status
			case category
			when 1 then "Games"
			when 2 then "Film"
			when 3 then "Music"
			end
		end

		def emotion
			case mood
			when 1 then "Chill"
			when 2 then "Offbeat"
			when 3 then "Epic"
			end
		end
end


