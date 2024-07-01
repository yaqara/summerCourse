using _5_lesson.Models;

namespace _5_lesson.Interfaces;

public interface IPostsRepository
{
    public IEnumerable<Post> GetAll();
    public Post? GetById(Guid id);
    public Post Add(PostRequest request);
    public Post? Edit(Post post);
}