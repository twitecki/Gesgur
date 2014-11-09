scriptId = 'me.gesgur'

pose = 'right'
state = 'normal'
printThis = 'none'
locked = true
voteFlag = nil
rollDefault = nil

function onPoseEdge(pose, edge)
    --Set pose to swap Wave In and Wave Out if using left arm
    pose = conditionallySwapWave(pose)

    --Strictly for navbar 
    if locked then
		if pose == 'thumbToPinky' and edge == 'on' then
			myo.keyboard('9', 'down')
    	elseif pose == 'waveIn' and edge == 'on' then
    		myo.keyboard('8', 'down')
    	elseif pose == 'waveOut' and edge == 'on' then 
    		myo.keyboard('7', 'down')
    	elseif pose == 'fist' and edge == 'on' then
    		myo.keyboard('3', 'down')
    	elseif pose == 'fingersSpread' and edge == 'on' then
    		myo.keyboard('2', 'down')
    	end
    	--Strictly for navbar
    	if pose == 'thumbToPinky' and edge == 'off' then
    		myo.keyboard('9', 'up')
    	elseif pose == 'waveIn' and edge == 'off' then
    		myo.keyboard('8', 'up')
    	elseif pose == 'waveOut' and edge == 'off' then 
    		myo.keyboard('7', 'up')
    	elseif pose == 'fist' and edge == 'off' then
    		myo.keyboard('3', 'up')
    	elseif pose == 'fingersSpread' and edge == 'off' then
    		myo.keyboard('2', 'up')
    	end
    end

    --When the gesture has been triggered
    if edge == 'on' then
    	--Thumb to Pinky
    	if pose == 'thumbToPinky' then
    			locked = not locked
				myo.vibrate('long')
				myo.keyboard('6', 'press')
				myo.keyboard('9', 'down')

    	elseif not locked then
    		--Wave In
    		if pose == 'waveIn' then
    			myo.vibrate('short')
				myo.keyboard('left_arrow','down')
				myo.keyboard('8', 'down')

			--Wave Out
    		elseif pose == 'waveOut' then
    			myo.vibrate('short')
				myo.keyboard('right_arrow', 'down')
				myo.keyboard('7', 'down')

			--Fist
    		elseif pose == 'fist' then
    			myo.vibrate('short')
				state = 'navigation'
    			rollDefault = nil
    			myo.keyboard('5', 'down')
    			myo.keyboard('3', 'down')

    		--Fingers Spread
    		elseif pose == 'fingersSpread' then
    			voteFlag = true
    			myo.vibrate('short')
				state = 'voting'
    			rollDefault = nil
    			myo.keyboard('4', 'down')
    			myo.keyboard('2', 'down')
    		end
    	end

  	--When the gesture has been released
    elseif edge == 'off' and not locked then 
    	--Fist
    	if pose == 'fist' then
    		state = 'normal'
    		myo.keyboard('5', 'up')
    		myo.keyboard('3', 'up')

    	--Fingers Spread
    	elseif pose == 'fingersSpread' then
    		state = 'normal'
    		myo.keyboard('equal', 'up')
    		myo.keyboard('minus', 'up')
    		myo.keyboard('4', 'up')
    		myo.keyboard('2', 'up')

    	elseif pose == 'waveIn' then
    		myo.keyboard('8', 'up')
			myo.keyboard('left_arrow','up')

			--Wave Out
    	elseif pose == 'waveOut' then
    		myo.keyboard('7', 'up')
			myo.keyboard('right_arrow', 'up')

		elseif pose == 'thumbToPinky' then
			myo.keyboard('9', 'up')
    	end
    end
end

function onPeriodic()

	if state == 'navigation' then
		if rollDefault == nil then
			calculateRoll()
		end

		if (myo.getRoll() - rollDefault) > 0.3 then
			myo.keyboard('down_arrow', 'down')
		elseif (myo.getRoll() - rollDefault) < -0.3 then
			myo.keyboard('up_arrow', 'down')
		end
	end

	if state == 'voting' then
		if rollDefault == nil then
			calculateRoll()
		end
		
		if ((myo.getRoll() - rollDefault) > 0.3) and voteFlag then
			--Upvote
			myo.keyboard('equal', 'down')
			voteFlag = false
		elseif ((myo.getRoll() - rollDefault) < -0.3) and voteFlag then
			--Downvote
			myo.keyboard('minus', 'down')
			voteFlag = false
		end
	end
end

function calculateRoll()
	rollSum = 0
	rollNum = 25
	for var = 0, rollNum - 1, 1 do
		rollSum = rollSum+myo.getRoll()
		wait(10)
	end
	rollDefault = rollSum/rollNum
end

function wait(ms)
	startTime = myo.getTimeMilliseconds()

	while myo.getTimeMilliseconds() - startTime < ms do
	end
end

--Swaps Wave In and Wave Out if the Myo is on the users left arm
function conditionallySwapWave(pose)
	if myo.getArm() == 'left' then
        if pose == 'waveIn' then
            pose = 'waveOut'
        elseif pose == 'waveOut' then
            pose = 'waveIn'
        end
    end
    return pose
end

--Activates the script if you are on imgur
function onForegroundWindowChange(app, title)
    if(string.match(title, 'imgur') or string.match(title, 'Imgur')) then 
    	return true
    else 
    	return false
    end
end
