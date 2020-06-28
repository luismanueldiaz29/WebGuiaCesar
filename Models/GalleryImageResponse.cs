using System.Collections.Generic;

namespace WebGuiaCesar.Models
{
    public class GalleryImageResponse
    {
        public string Name { get; private set; }
        public string Description { get; private set; }
        public List<string> ImagesPath { get; private set; }

        public GalleryImageResponse(string name, string description)
        {
            Name = name;
            Description = description;
            ImagesPath = new List<string>();
        }

        public void AddImage(string fileName)
        {
            ImagesPath.Add($"/images/{fileName}");
        }
    }
}