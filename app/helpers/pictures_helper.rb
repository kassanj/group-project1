module PicturesHelper
	def long_date(date)
		date.to_formatted_s(:long)
	end

	def embed(youtube_url)
		youtube_id = youtube_url.split("=").last
		content_tag(:iframe, nil, src: "//www.youtube.com/embed/#{youtube_id}")
	end
end
