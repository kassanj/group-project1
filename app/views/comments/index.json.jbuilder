json.array!(@comments) do |comment|
  json.extract! comment, :id, :body, :picture_id
  json.url comment_url(comment, format: :json)
end
