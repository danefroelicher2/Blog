# Supabase Keep-Alive Schedule Verification

## Cron Expressions

The GitHub Actions workflow uses the following cron schedules:

```yaml
- cron: '1 5 * * 4'  # Thursday 12:01 AM EST (5:01 AM UTC)
- cron: '0 0 * * 1'  # Sunday 7:00 PM EST (Monday 12:00 AM UTC)
```

## Schedule Details

### Run #1: Thursday Morning
- **Cron Expression**: `1 5 * * 4`
- **EST Time**: Thursday at 12:01 AM EST
- **UTC Time**: Thursday at 5:01 AM UTC
- **Frequency**: Every Thursday

### Run #2: Sunday Evening
- **Cron Expression**: `0 0 * * 1`
- **EST Time**: Sunday at 7:00 PM EST
- **UTC Time**: Monday at 12:00 AM UTC (midnight)
- **Frequency**: Every Sunday/Monday transition

## Next 3 Scheduled Run Times

Based on today's date (November 26, 2025):

1. **Sunday, November 30, 2025**
   - Time: 7:00 PM EST (Monday 12:00 AM UTC)
   - Cron: `0 0 * * 1`

2. **Thursday, December 4, 2025**
   - Time: 12:01 AM EST (5:01 AM UTC)
   - Cron: `1 5 * * 4`

3. **Sunday, December 7, 2025**
   - Time: 7:00 PM EST (Monday 12:00 AM UTC)
   - Cron: `0 0 * * 1`

## How to Verify the Workflow Ran

### Method 1: GitHub Actions Tab
1. Go to your repository on GitHub
2. Click the "Actions" tab
3. Look for "Keep Supabase Active with Real Activity" workflow
4. Check the run history at the scheduled times above
5. Click on a run to see detailed logs

### Method 2: Check Workflow Run Status
- Green checkmark = Success
- Red X = Failed
- Yellow dot = In progress

### Method 3: Verify Database Updates
1. Check your Supabase database
2. Look at the test post with title "test"
3. The `content` field should increment (e.g., "1" → "1,2" → "1,2,3")
4. The `updated_at` timestamp should match the workflow run time

### Method 4: Manual Trigger
You can manually trigger the workflow anytime:
1. Go to Actions tab
2. Select "Keep Supabase Active with Real Activity"
3. Click "Run workflow" button
4. Select branch (main)
5. Click green "Run workflow" button

## Troubleshooting

If the workflow doesn't run at the expected time:

1. **Check GitHub Secrets**: Ensure `SUPABASE_URL` and `SUPABASE_KEY` are set
2. **Check Test Post**: Verify a post with title "test" exists in your database
3. **Review Logs**: Check the Actions tab for error messages
4. **Time Zone**: Remember GitHub Actions uses UTC, not EST

## Important Notes

- GitHub Actions scheduled workflows may have a delay of up to 15 minutes
- The workflow requires a test post with title="test" to exist in the database
- Both the `content` and `updated_at` fields are updated on each run
- The workflow performs WRITE operations to prevent Supabase from pausing
