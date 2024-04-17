using System.ComponentModel.DataAnnotations;

namespace A2.Dtos
{
    public class EventInput
    {
        [Required] public string Start { get; set; }
        [Required] public string End { get; set; }
        [Required] public string Summary { get; set; }
        [Required] public string Description { get; set; }
        [Required] public string Location { get; set; }
    }
}
