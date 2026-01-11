export type Platform = "instagram" | "linkedin" | "facebook";

export type Post = {
  campaign_id: string;
  post_id: string;
  scheduled_date: string;
  caption: string;
  image_url: string;
  status: "scheduled";
  platform: Platform;
};

// FEBRUARY 2026
export const calendarPosts: Record<string, Post[]> = {
    // ---------- DECEMBER 2025 ----------
"02-12-2025": [
  {
    campaign_id: "cmp-900",
    post_id: "post-900",
    scheduled_date: "2025-12-02T10:00:00Z",
    caption: "December campaign kickoff ❄️ test more text to exceed limit and see ellipsis in action",
    image_url: "https://picsum.photos/300/200?900",
    status: "scheduled",
    platform: "linkedin"
  }
],

"05-12-2025": [
  {
    campaign_id: "cmp-901",
    post_id: "post-901",
    scheduled_date: "2025-12-05T15:00:00Z",
    caption: "Winter engagement ideas",
    image_url: "https://picsum.photos/300/200?901",
    status: "scheduled",
    platform: "instagram"
  }
],

"08-12-2025": [
  {
    campaign_id: "cmp-902",
    post_id: "post-902",
    scheduled_date: "2025-12-08T12:00:00Z",
    caption: "B2B year-end strategies",
    image_url: "https://picsum.photos/300/200?902",
    status: "scheduled",
    platform: "linkedin"
  },
  {
    campaign_id: "cmp-902",
    post_id: "post-903",
    scheduled_date: "2025-12-08T18:00:00Z",
    caption: "Repurpose your best content",
    image_url: "https://picsum.photos/300/200?903",
    status: "scheduled",
    platform: "facebook"
  }
],

"12-12-2025": [
  {
    campaign_id: "cmp-903",
    post_id: "post-904",
    scheduled_date: "2025-12-12T17:00:00Z",
    caption: "Creative spotlight of the week ✨",
    image_url: "https://picsum.photos/300/200?904",
    status: "scheduled",
    platform: "instagram"
  }
],

"15-12-2025": [
  {
    campaign_id: "cmp-904",
    post_id: "post-905",
    scheduled_date: "2025-12-15T11:30:00Z",
    caption: "Mid-December performance review",
    image_url: "https://picsum.photos/300/200?905",
    status: "scheduled",
    platform: "linkedin"
  }
],

"18-12-2025": [
  {
    campaign_id: "cmp-905",
    post_id: "post-906",
    scheduled_date: "2025-12-18T14:00:00Z",
    caption: "Holiday sale creatives 🎄",
    image_url: "https://picsum.photos/300/200?906",
    status: "scheduled",
    platform: "facebook"
  },
  {
    campaign_id: "cmp-905",
    post_id: "post-907",
    scheduled_date: "2025-12-18T19:00:00Z",
    caption: "Instagram holiday vibes",
    image_url: "https://picsum.photos/300/200?907",
    status: "scheduled",
    platform: "instagram"
  }
],

"22-12-2025": [
  {
    campaign_id: "cmp-906",
    post_id: "post-908",
    scheduled_date: "2025-12-22T10:00:00Z",
    caption: "Year-end wrap-up content",
    image_url: "https://picsum.photos/300/200?908",
    status: "scheduled",
    platform: "linkedin"
  }
],

"24-12-2025": [
  {
    campaign_id: "cmp-907",
    post_id: "post-909",
    scheduled_date: "2025-12-24T20:00:00Z",
    caption: "Christmas Eve special 🎅",
    image_url: "https://picsum.photos/300/200?909",
    status: "scheduled",
    platform: "instagram"
  }
],

"27-12-2025": [
  {
    campaign_id: "cmp-908",
    post_id: "post-910",
    scheduled_date: "2025-12-27T13:00:00Z",
    caption: "Top posts of 2025",
    image_url: "https://picsum.photos/300/200?910",
    status: "scheduled",
    platform: "facebook"
  }
],

"30-12-2025": [
  {
    campaign_id: "cmp-909",
    post_id: "post-911",
    scheduled_date: "2025-12-30T16:00:00Z",
    caption: "Preparing for 2026 🚀",
    image_url: "https://picsum.photos/300/200?911",
    status: "scheduled",
    platform: "linkedin"
  }
],

  // ---------- JAN 2026 ----------
  "01-01-2026": [
    {
      campaign_id: "cmp-001",
      post_id: "post-001",
      scheduled_date: "2026-01-01T10:00:00Z",
      caption: "New year, new beginnings 🚀",
      image_url: "https://picsum.photos/300/200?1",
      status: "scheduled",
      platform: "instagram"
    }
  ],
  // ... (rest of Jan stays same)

  // ---------- FEB 2026 ----------
  "02-02-2026": [
    {
      campaign_id: "cmp-020",
      post_id: "post-020",
      scheduled_date: "2026-02-02T11:00:00Z",
      caption: "February growth strategy",
      image_url: "https://picsum.photos/300/200?20",
      status: "scheduled",
      platform: "linkedin"
    }
  ],

  "05-02-2026": [
    {
      campaign_id: "cmp-021",
      post_id: "post-021",
      scheduled_date: "2026-02-05T16:00:00Z",
      caption: "Creative spotlight ✨",
      image_url: "https://picsum.photos/300/200?21",
      status: "scheduled",
      platform: "instagram"
    },
    {
      campaign_id: "cmp-021",
      post_id: "post-022",
      scheduled_date: "2026-02-05T18:00:00Z",
      caption: "Cross-platform engagement tips",
      image_url: "https://picsum.photos/300/200?22",
      status: "scheduled",
      platform: "facebook"
    }
  ],

  "10-02-2026": [
    {
      campaign_id: "cmp-022",
      post_id: "post-023",
      scheduled_date: "2026-02-10T09:30:00Z",
      caption: "B2B marketing insights",
      image_url: "https://picsum.photos/300/200?23",
      status: "scheduled",
      platform: "linkedin"
    }
  ],

  "14-02-2026": [
    {
      campaign_id: "cmp-023",
      post_id: "post-024",
      scheduled_date: "2026-02-14T20:00:00Z",
      caption: "Valentine’s Day campaign ❤️",
      image_url: "https://picsum.photos/300/200?24",
      status: "scheduled",
      platform: "instagram"
    }
  ],

  "20-02-2026": [
    {
      campaign_id: "cmp-024",
      post_id: "post-025",
      scheduled_date: "2026-02-20T14:00:00Z",
      caption: "Customer testimonials",
      image_url: "https://picsum.photos/300/200?25",
      status: "scheduled",
      platform: "facebook"
    }
  ],

  // ---------- MARCH 2026 ----------
  "03-03-2026": [
    {
      campaign_id: "cmp-030",
      post_id: "post-030",
      scheduled_date: "2026-03-03T10:00:00Z",
      caption: "March momentum starts now",
      image_url: "https://picsum.photos/300/200?30",
      status: "scheduled",
      platform: "linkedin"
    }
  ],

  "07-03-2026": [
    {
      campaign_id: "cmp-031",
      post_id: "post-031",
      scheduled_date: "2026-03-07T17:00:00Z",
      caption: "Weekend creative ideas 🎨",
      image_url: "https://picsum.photos/300/200?31",
      status: "scheduled",
      platform: "instagram"
    }
  ],

  "12-03-2026": [
    {
      campaign_id: "cmp-032",
      post_id: "post-032",
      scheduled_date: "2026-03-12T13:00:00Z",
      caption: "Scaling campaigns efficiently",
      image_url: "https://picsum.photos/300/200?32",
      status: "scheduled",
      platform: "linkedin"
    },
    {
      campaign_id: "cmp-032",
      post_id: "post-033",
      scheduled_date: "2026-03-12T18:00:00Z",
      caption: "Engage your audience today",
      image_url: "https://picsum.photos/300/200?33",
      status: "scheduled",
      platform: "facebook"
    }
  ],

  "18-03-2026": [
    {
      campaign_id: "cmp-033",
      post_id: "post-034",
      scheduled_date: "2026-03-18T15:00:00Z",
      caption: "Mid-month performance check",
      image_url: "https://picsum.photos/300/200?34",
      status: "scheduled",
      platform: "linkedin"
    }
  ],

  "25-03-2026": [
    {
      campaign_id: "cmp-034",
      post_id: "post-035",
      scheduled_date: "2026-03-25T19:30:00Z",
      caption: "March wrap-up & insights 📊",
      image_url: "https://picsum.photos/300/200?35",
      status: "scheduled",
      platform: "instagram"
    }
  ]
};

