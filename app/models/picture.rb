class Picture < ActiveRecord::Base

		validates :category, inclusion:(1..3)
		validates :mood, inclusion:(1..3)

		scope :games, -> { where(category: 1)}
		scope :film, -> { where(category: 2)}
		scope :music, -> { where(category: 3)}

		scope :chill, -> { where(mood: 1)}
		scope :offbeat, -> { where(mood: 2)}
		scope :epic, -> { where(mood: 3)}


		def category_name
			case category
			when 1 then "Games"
			when 2 then "Film"
			when 3 then "Music"
			end
		end

		def mood_name
			case mood
			when 1 then "Chill"
			when 2 then "Offbeat"
			when 3 then "Epic"
			end
		end
end


